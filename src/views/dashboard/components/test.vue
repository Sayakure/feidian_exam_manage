<template>
  <button @click="demo()">测试</button>
</template>

<script>
export default {
  methods: {
    Recursion(data) {
        const res = []
        data = Array.from(data)
        data.forEach(item => {
            console.log(item);
            if (item.children.length > 0) {
                const branch = {}
                branch.name = item.path
                res.push(branch)
            
            }
        })
        console.log('res', res);
    },
    demo() {
      const res = {
    "code": 200,
    "data": {
        "routers": [
            {
                "children": [],
                "icon": "info",
                "menuId": "1",
                "menuName": "信息查看",
                "parentId": "0",
                "path": "info",
                "perms": "info",
                "state": "0",
                "type": "M"
            },
            {
                "children": [
                    {
                        "component": "course/add/index",
                        "icon": "#",
                        "menuId": "3",
                        "menuName": "课程发布",
                        "parentId": "2",
                        "path": "add",
                        "perms": "course:add",
                        "state": "0",
                        "type": "C"
                    },
                    {
                        "component": "course/list/index",
                        "icon": "course",
                        "menuId": "19",
                        "menuName": "课程列表",
                        "parentId": "2",
                        "path": "list",
                        "perms": "course:list",
                        "state": "0",
                        "type": "C"
                    }
                ],
                "icon": "course",
                "menuId": "2",
                "menuName": "课程",
                "parentId": "0",
                "path": "course",
                "perms": "course",
                "state": "0",
                "type": "M"
            },
            {
                "children": [
                    {
                        "component": "exam/add/index",
                        "icon": "#",
                        "menuId": "6",
                        "menuName": "考试发布",
                        "parentId": "5",
                        "path": "add",
                        "perms": "exam:add",
                        "state": "0",
                        "type": "C"
                    }
                ],
                "icon": "exam",
                "menuId": "5",
                "menuName": "考试",
                "parentId": "0",
                "path": "exam",
                "perms": "exam",
                "state": "0",
                "type": "M"
            }
        ]
    },
    "message": "操作成功"
    }
    const routers = res.data.routers
    console.log('all', routers);
    this.Recursion(routers)
    }
  }
}
</script>

<style scoped>

</style>
