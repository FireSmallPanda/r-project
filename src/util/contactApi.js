const CONTACT_API = {
     // 获取字典
     getSystemDicts: {
        method: 'get',
        url: "https://apimall.dataoke.com/api/component/intellect/v1?comPid=2535&comId=14&client=pc&templateId=4&goodsCount=1&extraComponentId="
    },
     // 项目字典-新增-编辑
    postDictionary: {
        method: 'post',
        url: "/xx"
    },
     // 项目字典-删除
    deleteDictionary: {
        method: 'delete',
        url: "/xx"
    }
    
}
export default CONTACT_API