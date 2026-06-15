import { defineStore } from "pinia";
import { ref, computed } from "vue";
// @ts-ignore
import ixListData from "~/assets/data/ix-list.json";

export enum RSPolicy {
  Open_Auto = "open_auto",
  Open_Manual = "open_manual",
  Ask = "ask",
  WIP = "wip",
  Closed = "closed",
}

export enum IXSupport {
  AllowedVlan = "vlan",
  Allowed = "allow",
  IsDN42 = "dn42",
}

export interface RSFeatures {
  mpbgp?: boolean;
}

export interface RSInfo {
  asn: number;
  ipv4?: string | null;
  ipv6?: string | null;
  port?: number;
  policy: RSPolicy;
  lg?: string | null;
  features?: RSFeatures;
  description?: string;
}

export interface IXData {
  id: string;
  name: string;
  description: string;
  url?: string;
  support?: IXSupport;
  rs: RSInfo[];
}

export interface IXNode {
  id: string;
  ix: string;
  ixUrl?: string;
  ixSupport?: IXSupport;
  ixDescription?: string;
  rs?: RSInfo;
  description?: string;
}

export const useAppStore = defineStore("app", () => {
  const ixData = ref<IXData[]>(ixListData as IXData[]);

  const ixNodes = computed<IXNode[]>(() => {
    const nodes: IXNode[] = [];
    ixData.value.forEach((ix) => {
      if (ix.rs && Array.isArray(ix.rs) && ix.rs.length) {
        ix.rs.forEach((rs, index) => {
          nodes.push({
            id: `${ix.id}-${rs.asn}-${index}`,
            ix: ix.name,
            ixUrl: ix.url,
            ixSupport: ix.support,
            ixDescription: ix.description,
            rs: rs,
            description: rs.description,
          });
        });
      } else {
        nodes.push({
          id: `${ix.id}-null`,
          ix: ix.name,
          ixUrl: ix.url,
          ixSupport: ix.support,
          ixDescription: ix.description,
          rs: undefined,
          description: "No RS",
        });
      }
    });
    return nodes;
  });

  const totalIxCount = computed(() => ixData.value.length);

  return {
    ixData,
    ixNodes,
    totalIxCount,
  };
});
