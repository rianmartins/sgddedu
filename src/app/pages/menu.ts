export let MENU_ITEM = [
    {
        path: 'index',
        title: 'Dashboard',
        icon: 'dashboard'
    },
    {
        path: '',
        title: 'Perfil',
        icon: 'user',
        children: [
            {
                path: 'profile',
                title: 'Editar perfil'
            },
            {
                path: 'alterar-senha',
                title: 'Alterar senha'
            }
        ]
    },
    {
        path: '',
        title: 'SGGDEdu',
        icon: 'file',
        children: [
            {
                path: 'listar',
                title: 'Ver todos'
            },
            {
                path: 'novo',
                title: 'Criar novo'
            }
        ]
    },
    // {
    //     path: 'ui',
    //     title: 'UI Element',
    //     icon: 'paint-brush',
    //     children: [
    //         {
    //             path: 'grid',
    //             title: 'Bootstrap Grid'
    //         },
    //         {
    //             path: 'buttons',
    //             title: 'Buttons'
    //         },
    //         {
    //             path: 'notification',
    //             title: 'Notification'
    //         },
    //         {
    //             path: 'tabs',
    //             title: 'Tabs'
    //         },
    //         {
    //             path: 'file-tree',
    //             title: 'File Tree'
    //         },
    //         {
    //             path: 'modals',
    //             title: 'Modals'
    //         },
    //         {
    //             path: 'progress-bar',
    //             title: 'ProgressBar'
    //         }
    //     ]
    // },    
    // {
    //     path: 'menu-levels',
    //     title: 'Menu Levels',
    //     icon: 'sitemap',
    //     children: [
    //         {
    //             path: 'levels1',
    //             title: 'Menu Level1',
    //             children: [
    //                 {
    //                     path: 'levels1-1',
    //                     title: 'Menu Level1-1'
    //                 }
    //             ]
    //         },
    //         {
    //             path: 'levels2',
    //             title: 'Menu Level2'
    //         }
    //     ]
    // },
];
