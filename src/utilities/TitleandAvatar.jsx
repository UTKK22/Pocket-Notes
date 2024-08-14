function nameinitials(name){
    const groupname = name?.split(" ");
    const finitial = groupname?.[0] ? groupname?.[0][0] : ""
    const sinitial = groupname?.[1] ? groupname?.[1][0] : ""
    const avatar = finitial?.toUpperCase() + sinitial?.toUpperCase()
    return avatar
}
function titlename(name){
    const newTitle = name?.split(" ").map((word) => word?.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    return newTitle
}

export {titlename,nameinitials}