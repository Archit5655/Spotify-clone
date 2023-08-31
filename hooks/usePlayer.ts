import { create } from 'zustand';
interface playerstore{
    ids:string[],
    activeId?:string,
    setId:(id:string)=>void,
    setIds:(ids:string[])=>void,
    reset:()=>void

}
const usePlayer=create<playerstore>((set)=>({
    ids:[],
    activeId:undefined,
    setId:(id:string)=>set({activeId:id}),
    setIds:(ids:string[])=>set({ids:ids}),
    reset:()=>set({ids:[] ,activeId:undefined})
}));
export default usePlayer;