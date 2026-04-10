// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const header = document.querySelector('.sticky-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// 产品展示区图片懒加载
document.addEventListener('DOMContentLoaded', function() {
    const productImages = document.querySelectorAll('.product-item img');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';
                
                // 模拟图片加载完成
                setTimeout(() => {
                    img.style.opacity = '1';
                }, 300);
                
                observer.unobserve(img);
            }
        });
    }, {
        threshold: 0.1
    });
    
    productImages.forEach(img => {
        observer.observe(img);
    });
});

// 按钮点击效果
const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 添加点击动画
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// 导航菜单交互（移动端）
const navMenu = document.querySelector('.nav-menu');
const menuToggle = document.createElement('div');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('.nav-icons').insertBefore(menuToggle, document.querySelector('.nav-icons i:first-child'));

menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('show');
    if (navMenu.classList.contains('show')) {
        menuToggle.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// 响应式导航菜单样式
const style = document.createElement('style');
style.textContent = `
    .menu-toggle {
        display: none;
        cursor: pointer;
    }
    
    @media (max-width: 768px) {
        .menu-toggle {
            display: block;
        }
        
        .nav-menu {
            position: fixed;
            top: 44px;
            left: 0;
            width: 100%;
            background-color: white;
            flex-direction: column;
            align-items: center;
            padding: 20px 0;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transform: translateY(-100%);
            opacity: 0;
            transition: all 0.3s ease;
            z-index: 999;
        }
        
        .nav-menu.show {
            transform: translateY(0);
            opacity: 1;
        }
        
        .nav-menu li {
            margin: 10px 0;
        }
    }
`;
document.head.appendChild(style);