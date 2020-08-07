function getIXPMember(dt, ixpid) {
  var mlist = [];
  dt.member_list.forEach(mb => {
    if (mb.member_type !== "ixp")
      mb.connection_list.some(conn => {
        if (conn.ixp_id === ixpid) {
          mlist.push(mb);
          return true;
        } else {
          return false;
        }
      });
  });
  return mlist;
}

export { getIXPMember };
