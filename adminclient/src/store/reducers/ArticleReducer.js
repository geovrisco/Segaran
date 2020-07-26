const initialState = {
  articles:[],
  users:[]
}

const ArticleReducer = (state = initialState, action) => {
  console.log('dari articleReducer' , action)
  switch (action.type){
    case 'GET_ARTICLES':
      return {...state, articles:action.payload.articles}

    case 'GET_USERS':
      return {...state, users:action.payload.users}

    default: 
      return state
  }

}

export default ArticleReducer