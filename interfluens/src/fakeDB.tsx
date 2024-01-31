

export interface gameStates{
    'followerCount': number,
    'clickDelay': number,
    'maxFollowerGain': number,
    'enabledGenres': string[]
}

export const upgradeList:any[] = [
    //change delay later when everything is more ready
    {'id':'0','upgrade':'clickDelay', 'value':1000, 'upgradeValue': 100},
    {'id':'1','upgrade':'maxFollowerGain', 'value': 2, 'upgradeValue': 1},
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
export let upgradeModifiers:number[] = [
    upgradeList[0].value,
    upgradeList[1].value
]
//equal to 1 (100%)
export const genreReach:any[] = [
    {'music': 0.17},
    {'comedy': 0.15},
    {'tutorials': 0.12},
    {'livestreams': 0.12},
    {'education': 0.11},
    {'reviews': 0.10},
    {'sports': 0.8},
    {'gaming': 0.9},
    {'vlog':0.6}
]
export const maxFollowersReached = 8*10**9
export const gameStates:gameStates[] = [

]