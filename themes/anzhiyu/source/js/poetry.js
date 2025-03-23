(function() {
    // 创建今日诗词注入功能
    const injectTodayPoetry = () => {
        // 检查todayCard-title元素是否存在
        const checkAndUpdatePoetry = () => {
            const todayCardTitle = document.querySelector(".todayCard-title");
            if (todayCardTitle) {
                fetchAndUpdatePoetry(todayCardTitle);
                // 监听卡片的显示状态变化
                observeTodayCard();
                return true;
            }
            return false;
        };

        // 从今日诗词API获取内容并更新
        const fetchAndUpdatePoetry = (titleElement) => {
            // 记录原始文本，以便在API调用失败时可以恢复
            const originalText = titleElement.innerText;
            
            // 如果元素已经有诗词标记属性，跳过更新
            if (titleElement.getAttribute('data-poetry-injected')) return;
            
            fetch('https://v1.jinrishici.com/all')
                .then(response => response.json())
                .then(data => {
                    // 清空原有内容
                    titleElement.innerHTML = '';
                    
                    // 添加诗词内容
                    const poetryContent = document.createElement('div');
                    poetryContent.textContent = data.content;
                    poetryContent.style.fontSize = "1em";
                    poetryContent.style.lineHeight = "1.5";
                    titleElement.appendChild(poetryContent);
                    
                    // 添加来源信息
                    if (data.author && data.origin) {
                        const sourceInfo = document.createElement("div");
                        sourceInfo.textContent = `—— ${data.author}《${data.origin}》`;
                        sourceInfo.style.fontSize = "0.8em";
                        sourceInfo.style.opacity = "0.8";
                        sourceInfo.style.marginTop = "8px";
                        sourceInfo.style.textAlign = "right";
                        titleElement.appendChild(sourceInfo);
                    }
                    
                    // 标记为已注入诗词
                    titleElement.setAttribute('data-poetry-injected', 'true');
                })
                .catch(error => {
                    console.error('获取今日诗词失败:', error);
                    titleElement.textContent = originalText; // 恢复原始文本
                });
        };
        
        // 监听todayCard的显示/隐藏状态
        const observeTodayCard = () => {
            const todayCard = document.getElementById("todayCard");
            if (!todayCard) return;
            
            // 使用MutationObserver监听类名变化
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.attributeName === 'class') {
                        // 当卡片从隐藏变为显示时更新诗词
                        if (!todayCard.classList.contains('hide')) {
                            const titleElement = todayCard.querySelector('.todayCard-title');
                            if (titleElement) {
                                // 移除已注入标记，以便重新获取诗词
                                titleElement.removeAttribute('data-poetry-injected');
                                fetchAndUpdatePoetry(titleElement);
                            }
                        }
                    }
                });
            });
            
            // 开始监听
            observer.observe(todayCard, { attributes: true });
        };

        // 尝试立即更新，如果元素还未加载，则设置重试
        if (!checkAndUpdatePoetry()) {
            // 如果元素还未加载，等待DOM变化后再尝试
            const bodyObserver = new MutationObserver((mutations, observer) => {
                if (checkAndUpdatePoetry()) {
                    // 找到并更新后，停止观察
                    observer.disconnect();
                }
            });
            
            // 观察DOM变化
            bodyObserver.observe(document.body, {
                childList: true,
                subtree: true
            });
            
            // 设置超时，防止无限等待
            setTimeout(() => {
                bodyObserver.disconnect();
            }, 10000); // 10秒后停止尝试
        }
    };

    // 页面加载完成后执行注入
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectTodayPoetry);
    } else {
        injectTodayPoetry();
    }
})();