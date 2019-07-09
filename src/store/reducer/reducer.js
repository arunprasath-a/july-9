const initialState = {
    userName: "",
    age:"",
    Place:"",
    gender:"MALE",
    Feedback:"",
    zip:"",
    rating:5,
    Userimg1 :"https://illustoon.com/photo/1932.png",
    modalIsOpen:false
}


const reducer = (state = initialState, action) => {
    const newState = { ...state }

    switch (action.type) {
        case "NAME_CHANGE":
            return Object.assign({}, newState, { userName: action.nameValue })
            
        case "AGE_CHANGE":
            return Object.assign({}, newState, { age: action.ageValue })    
        
        case "PLACE_CHANGE":
            return Object.assign({}, newState, { Place: action.placeValue })     

        case "FEEDBACK_CHANGE":
            return Object.assign({}, newState, { Feedback: action.feedValue })
          
        case "ZIP_CHANGE":
            return Object.assign({}, newState, { zip: action.zipValue })
        
        case "GENDER_CHANGE":
            return Object.assign({}, newState, { gender: action.GenderValue })
                  

        case "ON_OPEN":
            return Object.assign({}, newState, { modalIsOpen: true  })
    
        case "ON_CLOSE":
            return Object.assign({}, newState, { modalIsOpen: false })

        case "RATING_CHANGE":
            return Object.assign({}, newState, { rating: action.RatingValue,Userimg1:"https://illustoon.com/photo/1932.png"}) 
               
        case "RATING_LOW":
            return Object.assign({}, newState, { rating: action.RatingValue,Userimg1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbAbgXnmNsaFl6LAPAHEcfacFbF97ouZvKc33RaHaiax7quVod" })

        case "CLEAR_ALL":
            return Object.assign({}, newState, { userName: "",
            age:"",
            Feedback:"",
            zip:"",
            modalIsOpen:false })        
            

        default:  
        return newState;  
    }
   
}


export default reducer;