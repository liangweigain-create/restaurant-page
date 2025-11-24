import contactInfo from '../data/contact-information';

// 1. 给函数命名（和其他页面保持一致，比如 createAboutPage）
export default function createAboutPage() {
  const aboutDiv = document.createElement('div');
  aboutDiv.classList.add('about-container');
  
  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contact-container');
  aboutDiv.appendChild(contactDiv);

  // 2. 循环遍历联系信息，创建并添加到父容器
  contactInfo.forEach((contact) => {
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info-container');

    // 3. 修复：给 DOM 元素的 textContent 赋值（不是直接覆盖元素）
    const infoName = document.createElement('h2');
    infoName.classList.add('info-name');
    infoName.textContent = contact.name; // 正确：设置文本内容

    const infoNum = document.createElement('p');
    infoNum.classList.add('info-phone'); // 加类名，便于样式控制
    infoNum.textContent = `电话：${contact.phoneNumber}`; // 加前缀，用户体验更好

    const infoEmail = document.createElement('p');
    infoEmail.classList.add('info-email');
    infoEmail.textContent = `邮箱：${contact.email}`;

    // 4. 循环内直接把 infoDiv 添加到 contactDiv（避免循环外访问）
    infoDiv.appendChild(infoName);
    infoDiv.appendChild(infoNum);
    infoDiv.appendChild(infoEmail);
    contactDiv.appendChild(infoDiv); // 关键：循环内完成添加
  });

  // 5. 无需循环外再 appendChild（已在循环内处理）
  return aboutDiv;
}