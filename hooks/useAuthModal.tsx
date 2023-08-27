import {create} from 'zustand'
import React from 'react'
interface AuthModalStore{
    isOpen:boolean,
    onOpen:()=> void,
    onClose:()=>void,

}

const useAuthModal = create<AuthModalStore>((set)=>({
    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false}),
}));



export default useAuthModal
