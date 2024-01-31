export const upgradeList:any[] = [
    //change delay later when everything is more ready
    {'id':'0','upgrade':'clickDelay', 'value':1000, 'upgradeValue': 100},
    {'id':'1','upgrade':'maxFollowerGain', 'value': 2, 'upgradeValue': +1},
    {'id':'2','upgrade':'genres', 'value': [
        'music',
        'comedy',
        'tutorials',
        'livestreams',
        'education',
        'reviews',
        'sports',
        'gaming',
        'vlog'
    ]}

]
export const upgradeModifiers = [
    upgradeList[0].value,
    upgradeList[1].value
]
