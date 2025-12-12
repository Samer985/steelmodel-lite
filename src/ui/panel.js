```javascript
export function createUIPanel() {
const panel = document.createElement('div');
panel.style.position = 'absolute';
panel.style.top = '10px';
panel.style.left = '10px';
panel.style.padding = '10px';
panel.style.background = '#222';
panel.style.color = 'white';
panel.style.borderRadius = '8px';
panel.innerHTML = `<b>SteelModel Lite</b><br>UI Panel Placeholder`;
document.body.appendChild(panel);
}
```
