// Elementos DOM
const loginBtn = document.getElementById('loginBtn');

// Função de login
async function handleLogin(event) {
    event.preventDefault();
    
    // Adiciona estado de carregamento
    loginBtn.classList.add('loading');
    loginBtn.textContent = 'CARREGANDO...';
    
    try {
        // Simula autenticação (substitua com sua lógica real)
        await simulateLogin();
        
        // Sucesso
        loginBtn.textContent = 'SUCESSO!';
        loginBtn.style.backgroundColor = '#00cc66';
        
        // Redireciona após 1 segundo
        setTimeout(() => {
            // window.location.href = '/dashboard.html';
            console.log('✅ Login realizado com sucesso!');
            console.log('🔄 Redirecionando para o dashboard...');
            
            // Reseta o botão após 2 segundos (apenas para demonstração)
            setTimeout(() => {
                resetButton();
            }, 2000);
        }, 1000);
        
    } catch (error) {
        // Erro
        loginBtn.textContent = 'ERRO!';
        loginBtn.style.backgroundColor = '#cc0000';
        console.error('❌ Erro ao fazer login:', error);
        
        // Reseta o botão após 2 segundos
        setTimeout(() => {
            resetButton();
        }, 2000);
    }
}

// Simula processo de login
function simulateLogin() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simula sucesso (você pode adicionar lógica de validação aqui)
            const success = Math.random() > 0.2; // 80% de chance de sucesso
            
            if (success) {
                resolve({ success: true });
            } else {
                reject(new Error('Falha na autenticação'));
            }
        }, 2000);
    });
}

// Reseta o botão ao estado original
function resetButton() {
    loginBtn.classList.remove('loading');
    loginBtn.textContent = 'LOGIN';
    loginBtn.style.backgroundColor = '#000000';
}

// Event Listener para o botão
loginBtn.addEventListener('click', handleLogin);

// Efeito de ripple ao clicar
loginBtn.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    this.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
});

// Adiciona estilo para o efeito ripple
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Log de inicialização
console.log('🚀 Sistema Inteligência MAX inicializado');
console.log('🔐 Clique no botão LOGIN para acessar');
console.log('📊 Plataforma exclusiva do Grupo Aurea');
