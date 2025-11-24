export default function creatHomePage() {
    const homeDiv = document.createElement('div');
    homeDiv.innerHTML = `
        <h1>Welcome to my Eastern Magic Restaurant!</h1>
        <p>我们提供超追无敌新鲜美味的北海道辣白菜包金枪鱼生鱼片锅贴</p>
    `;
    return homeDiv;
}