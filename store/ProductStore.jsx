import { create } from "zustand";
import axios from "axios";
import {unauthorized } from "../utility/utility";

const ProductStore = create((set) => ({

    
Createproduct: {
    name: "", brand: "", category: "", description: "", image: ""
  },
  
  setCreateproduct:(name,value)=>{
   set((state)=>({
    Createproduct:{
        ...state.Createproduct,
        [name]:value
    }
   })) 
  },
  CreateRequest: async(postBody,productID)=>{
    
    try{
        if (productID == null){
            let res = await axios.post(`/api/v1/CreateProduct`,postBody);
            return res.data['status'] === 'success';
        } else{
            let res = await axios.post(`/api/v1/CreateProduct/${productID}`,postBody);
            return res.data['status'] === 'success';
        }
        
        
    }
    catch(e){
        unauthorized(e.response.status)
    }
  },
  ProfileDetails:null,
  ProfileDetailsRequest:async()=>{
    try{
       let res = await axios.get(`/api/v1/ReadProfile`);
        console.log(res.data)
        if(res.data['data'].length > 0){
            set({ProfileDetails:res.data['data'][0]})
            set({ProfileFrom:res.data['data'][0]})
        }else{
            set({ProfileDetails:[]})
        }
    }catch (e){
        unauthorized(e.response.status)
    }
  },
  
  ProfileSaveRequest: async(postBody)=>{
    try{
        set({PrductDetails:null});
        let res = await axios.post(`/api/v1/UpdateProfile`,postBody);
        return res.data['status'] === 'success';
    }
    catch(e){
        unauthorized(e.response.status)
    }
  },

  ProductRequest : async ()=>{
      let res = await  axios.get('/api/v1/ReadProduct');
      //console.log(res)
      if(res.data['status'] === "success"){
          set({ProductList:res.data['data']})
      }
  },
  
  ReadRequest: async(productID)=>{
    console.log(productID)
    let res = await  axios.get(`/api/v1/ReadbyProduct/${productID}`);
    console.log(res.data)
    if(res.data['status'] === "success"){
        set({Createproduct:res.data['data']})
    }},



    
// UpdateRequest: async(productID)=>{
//         let res = await  axios.get(`/api/v1/UpdateProduct/${productID}`);
//         if(res.data['status'] === "success"){
//             set({ProductList:res.data['data']})
//         }
//   },

//   Updateproduct: {
//     name: "", brand: "", category: "", description: "", image: ""
//   },
  
//   setUpdateproduct:(name,value)=>{
//    set((state)=>({
//     Updateproduct:{
//         ...state.Updateproduct,
//         [name]:value
//     }
//    })) 
//   },
//   ProfileDetails:null,

//   UpdateRequest: async(productId,postBody)=>{
//     try{
//         let res = await axios.post(`/api/v1/UpdateProduct/${productId}`,postBody);
//         return res.data['status'] === 'success';
//     }
//     catch(e){
//         unauthorized(e.response.status)
//     }
//   },

  }));
  
  export default ProductStore;