export const selectUser = (user)=>{
	console.log("You selected on User:", user.last);
	return{
		type:"USER_SELECTED",
		payload:user
	}
}