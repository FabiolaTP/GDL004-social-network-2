export default () => {
    const  viewHome = `
    <h1>Welcome at Neek!</h2>
    
    `;
    const divElement = document.createElement("div") 
    divElement.innerHTML = viewHome; 
    return divElement; 


}