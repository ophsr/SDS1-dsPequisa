export type GamePlatform = 'XBOX' | 'PC'|'PLAYSTATION';
export type Game = {
    id: number,
    value:number,
    title: string,
    label: string,
    platform: GamePlatform,
}