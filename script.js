// EVENTO DO FORMULÁRIO COM O COMANDO QUE LIMPA OS CAMPOS
document.getElementById('contact-form').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Mensagem enviada com sucesso! (Configurar endpoint real posteriormente)');
  this.reset(); // ESTA LINHA ESVAZIA OS CAMPOS PARA REENVIAR
});

function baixarApp(e) {
  e.preventDefault();

  const appHTML = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SAFEZONE</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
    
    /* MODIFICAÇÃO: Aplicativo com tema Dark/Neon combinando com a Landing Page */
    body { background: #020617; min-height: 100vh; display: flex; justify-content: center; align-items: center; }
    
    .phone-frame { width: 375px; height: 812px; background: linear-gradient(180deg, #0f172a 0%, #020617 100%); border-radius: 35px; overflow: hidden; position: relative; box-shadow: 0 0 40px rgba(0, 242, 254, 0.15); border: 8px solid #1e293b; }
    .status-bar { height: 38px; padding: 10px 16px 0; display: flex; justify-content: space-between; align-items: center; color: #fff; font-weight: 700; font-size: 12px; }
    .status-icons i { margin-left: 6px; color: #cbd5e1; }
    .top-area { padding: 10px 16px 14px; }
    .search-row { display: flex; align-items: center; gap: 10px; }
    .search-form { flex: 1; }
    .search-box { width: 100%; height: 48px; background: rgba(30, 41, 59, 0.7); border: 1px solid #334155; border-radius: 24px; display: flex; align-items: center; padding: 0 16px; color: #94a3b8; font-size: 15px; }
    .search-box input { border: none; outline: none; width: 100%; font-size: 15px; background: transparent; color: #fff; }
    .menu-icon { color: #fff; font-size: 34px; line-height: 1; padding-right: 4px; cursor: pointer; transition: 0.2s; }
    .menu-icon:hover { color: #00f2fe; }
    .content { height: calc(100% - 92px); overflow-y: auto; padding: 14px 14px 18px; }
    
    .section { display: none; }
    .section.active { display: block; }
    
    .auth-box { background: rgba(15, 23, 42, 0.8); border: 1px solid #1e293b; border-radius: 18px; padding: 20px; color: #cbd5e1; margin-top: 6px; box-shadow: 0 10px 25px rgba(0,0,0,0.5); }
    .form-group { margin-bottom: 16px; }
    .form-group label { display: block; margin-bottom: 8px; font-weight: 700; font-size: 14px; color: #cbd5e1; }
    .input-wrapper { position: relative; }
    .input-wrapper i { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); color: #64748b; }
    .form-input { width: 100%; background: #020617; border: 1px solid #1e293b; border-radius: 12px; padding: 13px 14px 13px 40px; font-size: 15px; outline: none; color: #fff; transition: 0.3s; }
    .form-input:focus { border-color: #00f2fe; box-shadow: 0 0 10px rgba(0, 242, 254, 0.2); }
    
    .btn { width: 100%; border: none; border-radius: 12px; padding: 14px; font-size: 15px; font-weight: 800; cursor: pointer; transition: 0.3s; }
    .btn-primary { background: #1a56db; color: #fff; margin-top: 4px; box-shadow: 0 4px 15px rgba(26, 86, 219, 0.4); }
    .btn-primary:hover { background: #1e40af; box-shadow: 0 6px 20px rgba(0, 242, 254, 0.4); }
    
    .options-row { display: flex; justify-content: space-between; align-items: center; margin: 12px 0 16px; font-size: 13px; gap: 10px; }
    .checkbox-container { display: flex; align-items: center; gap: 8px; cursor: pointer; color: #cbd5e1; }
    .checkbox-container input { accent-color: #00f2fe; width: 16px; height: 16px; }
    .forgot-link { color: #00f2fe; text-decoration: none; font-weight: 700; white-space: nowrap; cursor: pointer; }
    .toggle-text { text-align: center; margin-top: 14px; color: #fff; font-size: 14px; }
    .toggle-text a, .back-link { color: #00f2fe; font-weight: 800; text-decoration: underline; cursor: pointer; }
    .back-link { display: inline-block; margin-bottom: 14px; text-decoration: none; }
    
    .title { font-size: 24px; font-weight: 800; line-height: 1.05; color: #fff; }
    .subtitle { font-size: 14px; color: #94a3b8; margin-top: 4px; }
    .mini-title { font-size: 16px !important; font-weight: 800; color: #fff !important; }
    .icon-big { font-size: 34px; color: #00f2fe; }
    
    .card-wide { background: rgba(15, 23, 42, 0.8); border: 1px solid #1e293b; border-radius: 18px; padding: 18px 16px; display: flex; align-items: center; gap: 14px; min-height: 86px; margin-bottom: 12px; color: #cbd5e1; cursor: pointer; transition: all 0.2s; }
    .card-wide:hover { border-color: #00f2fe; background: rgba(30, 41, 59, 0.9); }
    .card-wide:active { transform: scale(0.98); }
    
    .card-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .card-grid .card { background: rgba(15, 23, 42, 0.8); border: 1px solid #1e293b; border-radius: 18px; padding: 18px 16px; min-height: 92px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: 8px; color: #cbd5e1; cursor: pointer; transition: 0.2s; }
    .card-grid .card:hover { border-color: #00f2fe; background: rgba(30, 41, 59, 0.9); transform: translateY(-3px); }
    .icon-wrap { position: relative; width: 44px; display: flex; justify-content: center; align-items: center; flex: 0 0 44px; font-size: 34px; color: #00f2fe; }
    .badge { position: absolute; top: -6px; right: -6px; width: 22px; height: 22px; border-radius: 50%; background: #ef4444; color: #fff; font-size: 12px; display: flex; align-items: center; justify-content: center; border: 2px solid #0f172a; box-shadow: 0 0 10px rgba(239, 68, 68, 0.5); }
    .stars { margin-top: 8px; color: #444; font-size: 18px; letter-spacing: 2px; }
    .home-title { font-size: 22px; font-weight: 800; color: #fff; }

    /* Estilos do Sistema de Avaliação e Buscador */
    .star-rating { font-size: 32px; color: #334155; cursor: pointer; display: flex; justify-content: center; gap: 5px; margin-bottom: 15px; }
    .star-rating i.active { color: #f59e0b; text-shadow: 0 0 15px rgba(245, 158, 11, 0.5); }
    .search-header-text { font-size: 16px; color: #fff; font-weight: bold; margin-bottom: 12px; display: flex; align-items: center; gap: 10px; }
    .search-tabs { display: flex; background: rgba(15, 23, 42, 0.8); border: 1px solid #1e293b; border-radius: 12px; margin-bottom: 12px; overflow: hidden; }
    .search-tab { flex: 1; text-align: center; padding: 12px 0; font-size: 13px; font-weight: 700; color: #94a3b8; cursor: pointer; border-bottom: 3px solid transparent; transition: 0.2s; }
    .search-tab.active { color: #00f2fe; border-bottom: 3px solid #00f2fe; background: rgba(30, 41, 59, 0.8); }
    .search-result-item { background: rgba(15, 23, 42, 0.8); border: 1px solid #1e293b; border-radius: 12px; padding: 15px; margin-bottom: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.2); color: #cbd5e1; }
    .search-result-title { font-size: 16px; font-weight: 800; color: #00f2fe; margin-bottom: 6px; }
    .search-result-snippet { font-size: 13px; color: #94a3b8; line-height: 1.4; }
    .search-result-snippet b { color: #fff; }
    .mock-img-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
    .mock-img { width: 100%; height: 130px; background: #1e293b; border-radius: 8px; background-size: cover; background-position: center; border: 1px solid #334155; }
    
    /* Estilos Extras do Plano Golden e Checkout */
    .golden-card { background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: #fff; border: none; box-shadow: 0 10px 25px rgba(245, 158, 11, 0.3); }
    .golden-list { list-style: none; padding: 0; margin: 0; font-size: 14px; line-height: 1.6; }
    .golden-list li { margin-bottom: 12px; display: flex; align-items: flex-start; gap: 8px; }
    .golden-list i { margin-top: 3px; color: #fff; }
    .btn-golden { background: #fff; color: #d97706; font-weight: 900; width: 100%; border: none; border-radius: 12px; padding: 14px; font-size: 15px; cursor: pointer; box-shadow: 0 4px 15px rgba(0,0,0,0.2); transition: 0.2s; }
    .btn-golden:active { transform: scale(0.98); }
    
    /* Estilos Menus Secundários */
    .info-box p { margin-bottom: 8px; color: #cbd5e1; font-size: 15px; }
    .info-box strong { color: #00f2fe; }
    .toggle-switch { display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; padding-bottom: 12px; border-bottom: 1px solid #1e293b; }
    .toggle-switch:last-child { border-bottom: none; margin-bottom: 25px; }
    
    .list-item { background: rgba(15, 23, 42, 0.8); border: 1px solid #1e293b; border-radius: 12px; padding: 15px; margin-bottom: 10px; display: flex; align-items: center; gap: 15px; transition: 0.2s; cursor: pointer; }
    .list-item:hover { border-color: #00f2fe; }
    .list-item i { font-size: 24px; color: #00f2fe; }
    .list-item .title { font-size: 15px; font-weight: bold; color: #fff; }
    .list-item .desc { font-size: 13px; color: #94a3b8; }
    .status-dot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; margin-right: 5px; box-shadow: 0 0 8px currentColor; }
    .status-dot.green { background: #10b981; color: #10b981; }
    .status-dot.yellow { background: #f59e0b; color: #f59e0b; }
    .status-dot.red { background: #ef4444; color: #ef4444; }
  </style>
</head>
<body>
  <div class="phone-frame">
    <div class="status-bar">
      <div id="clock-brasilia">--:--</div>
      <div class="status-icons">
        <i class="fas fa-signal"></i>
        <i class="fas fa-wifi"></i>
        <i class="fas fa-battery-three-quarters"></i>
      </div>
    </div>
    
    <div class="top-area">
      <div class="search-row">
        <form class="search-form" onsubmit="realizarBusca(event)">
          <div class="search-box">
            <i class="fas fa-search" style="margin-right:10px;"></i>
            <input type="search" id="top-search-input" placeholder="Pesquisar imagens, vídeos, notícias..." required>
          </div>
        </form>
        <div class="menu-icon" onclick="showHome()"><i class="fas fa-bars"></i></div>
      </div>
    </div>
    
    <div class="content">
      
      <div id="login-screen" class="section active">
        <div class="auth-box">
          <div style="text-align:center; margin-bottom:18px;">
            <i class="fas fa-shield-halved" style="font-size:44px; color:#00f2fe;"></i>
            <h2 style="margin-top:10px; color:#ffffff;">Safezone</h2>
            <p style="color:#94a3b8; font-size:14px;">Bem-vindo de volta!</p>
          </div>
          <form onsubmit="event.preventDefault(); showHome();">
            <div class="form-group">
              <label>Usuário ou Email</label>
              <div class="input-wrapper">
                <i class="fas fa-user"></i>
                <input type="text" class="form-input" placeholder="Digite seu login" required>
              </div>
            </div>
            <div class="form-group">
              <label>Senha</label>
              <div class="input-wrapper">
                <i class="fas fa-lock"></i>
                <input type="password" class="form-input" placeholder="Digite sua senha" required>
              </div>
            </div>
            <div class="options-row">
              <label class="checkbox-container">
                <input type="checkbox"> Me manter conectado
              </label>
              <a class="forgot-link" onclick="showForgot()">Esqueceu sua senha?</a>
            </div>
            <button type="submit" class="btn btn-primary">ENTRAR</button>
          </form>
        </div>
        <div class="toggle-text">Não tem uma conta? <a onclick="showRegister()">Cadastre-se</a></div>
      </div>

      <div id="forgot-screen" class="section">
        <a class="back-link" onclick="showLogin()"><i class="fas fa-arrow-left"></i> Voltar</a>
        <div class="auth-box">
          <div style="text-align:center; margin-bottom:18px;">
            <i class="fas fa-key" style="font-size:44px; color:#00f2fe;"></i>
            <h2 style="margin-top:10px; color:#ffffff;">Recuperar Senha</h2>
            <p style="color:#94a3b8; font-size:14px;" id="forgot-subtitle">Digite seu e-mail para receber um código.</p>
          </div>
          <form id="forgot-form" onsubmit="enviarCodigo(event)">
            <div class="form-group">
              <label>Email</label>
              <div class="input-wrapper">
                <i class="fas fa-envelope"></i>
                <input type="email" id="forgot-email" class="form-input" placeholder="seu@email.com" required>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">ENVIAR CÓDIGO</button>
          </form>
          <form id="verify-form" style="display:none;" onsubmit="verificarCodigo(event)">
            <div class="form-group">
              <label>Código de Verificação</label>
              <div class="input-wrapper">
                <i class="fas fa-hashtag"></i>
                <input type="text" class="form-input" placeholder="000000" maxlength="6" required style="letter-spacing: 4px; text-align: center; font-weight: bold;">
              </div>
            </div>
            <button type="submit" class="btn btn-primary">VERIFICAR CÓDIGO</button>
            <div style="text-align:center; margin-top:15px;">
              <a id="resend-link" style="color:#64748b; font-size:13px; font-weight:bold; text-decoration:none; cursor:not-allowed;">Reenviar código em <span id="timer">30</span>s</a>
            </div>
          </form>
        </div>
      </div>

      <div id="register-screen" class="section">
        <a class="back-link" onclick="showLogin()"><i class="fas fa-arrow-left"></i> Voltar</a>
        <div class="auth-box">
          <div style="text-align:center; margin-bottom:18px;">
            <i class="fas fa-user-plus" style="font-size:44px; color:#00f2fe;"></i>
            <h2 style="margin-top:10px; color:#ffffff;">Criar Conta</h2>
            <p style="color:#94a3b8; font-size:14px;">Junte-se à Safezone</p>
          </div>
          <form onsubmit="event.preventDefault(); alert('Cadastro simulado!');">
            <div class="form-group"><label>Nome Completo</label><div class="input-wrapper"><i class="fas fa-id-card"></i><input type="text" class="form-input" placeholder="Seu nome" required></div></div>
            <div class="form-group"><label>Email</label><div class="input-wrapper"><i class="fas fa-envelope"></i><input type="email" class="form-input" placeholder="seu@email.com" required></div></div>
            <div class="form-group"><label>Criar Senha</label><div class="input-wrapper"><i class="fas fa-lock"></i><input type="password" class="form-input" placeholder="Mínimo 6 dígitos" required></div></div>
            <button type="submit" class="btn btn-primary">CADASTRAR</button>
          </form>
        </div>
        <div class="toggle-text">Já tem conta? <a onclick="showLogin()">Entrar</a></div>
      </div>

      <div id="home-screen" class="section">
        <div class="card-wide" onclick="showSafezoneInfo()"><div class="icon-wrap"><i class="fas fa-shield-halved"></i></div><div><div class="home-title">Safezone</div><div class="subtitle">Aplicativo de segurança pessoal</div></div></div>
        <div class="card-wide" onclick="showNotifications()"><div class="icon-wrap"><i class="fas fa-bell"></i><span class="badge">2</span></div><div class="mini-title">Notificações</div></div>
        <div class="card-wide" onclick="showDevices()"><div class="icon-wrap"><i class="fas fa-magnifying-glass-location"></i></div><div class="mini-title">Localizar dispositivos conectados</div></div>
        <div class="card-wide" onclick="showReports()"><div class="icon-wrap"><i class="fas fa-tower-broadcast"></i></div><div class="mini-title">Denúncias</div></div>
        <div class="card-grid">
          <div class="card" onclick="showMaps()"><i class="fas fa-map-location-dot icon-big"></i><div class="mini-title">Google maps</div></div>
          <div class="card" onclick="showSettings()"><i class="fas fa-gear icon-big"></i><div class="mini-title">Configuração</div></div>
          <div class="card" onclick="showGolden()"><i class="fas fa-crown icon-big" style="color:#f59e0b;"></i><div class="mini-title">Plano Golden</div></div>
          <div class="card" onclick="showRating()"><div class="mini-title">Avalia-nos!</div><div class="stars" style="color:#f59e0b;">★ ★ ★ ☆ ☆</div></div>
        </div>
      </div>

      <div id="info-screen" class="section">
        <a class="back-link" onclick="showHome()"><i class="fas fa-arrow-left"></i> Voltar</a>
        <div class="auth-box" style="text-align:center;">
          <h3 style="color:#ffffff; margin-bottom:20px;">Proteção SafeZone</h3>
          <i class="fas fa-shield-check" style="font-size:80px; color:#10b981; margin-bottom:10px; text-shadow: 0 0 20px rgba(16, 185, 129, 0.5);"></i>
          <h4 style="color:#10b981; font-weight:bold;">SISTEMA ATIVO</h4>
          <p style="color:#94a3b8; font-size:14px; margin-bottom:25px;">Radar preditivo e sensores em funcionamento contínuo.</p>
          
          <div style="border-top:1px solid #1e293b; padding-top:20px;">
            <p style="color:#ef4444; font-weight:bold; font-size:16px; margin-bottom:10px;">EMERGÊNCIA</p>
            <button class="btn" style="background:#ef4444; padding:20px; font-size:18px; border-radius:18px; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px; width:100%; box-shadow:0 8px 15px rgba(239, 68, 68, 0.4);" onclick="alert('ATIVANDO MODO COAÇÃO (Fake Screen)... Enviando alerta silencioso.')">
              <i class="fas fa-triangle-exclamation" style="font-size:30px;"></i>
              BOTÃO DE PÂNICO
            </button>
            <p style="font-size:12px; color:#64748b; margin-top:10px;">Pressione em caso de coação ou assalto para acionar autoridades silenciosamente e ocultar dados sensíveis.</p>
          </div>
        </div>
      </div>

      <div id="notifications-screen" class="section">
        <a class="back-link" onclick="showHome()"><i class="fas fa-arrow-left"></i> Voltar</a>
        <div class="auth-box">
          <h3 style="color:#ffffff; margin-bottom:20px;"><i class="fas fa-bell" style="color:#00f2fe;"></i> Alertas Recentes</h3>
          
          <div class="list-item" style="border-left: 4px solid #ef4444;">
            <i class="fas fa-exclamation-triangle" style="color:#ef4444;"></i>
            <div>
              <div class="title">Risco Iminente</div>
              <div class="desc">Assalto relatado a 500m de você (Rua das Flores). Há 2 min.</div>
            </div>
          </div>

          <div class="list-item" style="border-left: 4px solid #f59e0b;">
            <i class="fas fa-eye" style="color:#f59e0b;"></i>
            <div>
              <div class="title">Área com Risco Moderado</div>
              <div class="desc">IA preditiva indica aumento de furtos neste horário. Fique atento.</div>
            </div>
          </div>

          <div class="list-item" style="border-left: 4px solid #00f2fe;">
            <i class="fas fa-info-circle" style="color:#00f2fe;"></i>
            <div>
              <div class="title">Rota Segura Atualizada</div>
              <div class="desc">O GPS encontrou um caminho com maior patrulhamento para seu destino.</div>
            </div>
          </div>
        </div>
      </div>

      <div id="devices-screen" class="section">
        <a class="back-link" onclick="showHome()"><i class="fas fa-arrow-left"></i> Voltar</a>
        <div class="auth-box">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
            <h3 style="color:#ffffff; margin:0;"><i class="fas fa-users" style="color:#00f2fe;"></i> Minha Rede</h3>
            <i class="fas fa-plus-circle" style="font-size:24px; color:#00f2fe; cursor:pointer;" onclick="alert('Adicionar familiar')"></i>
          </div>
          
          <div class="list-item">
            <i class="fas fa-mobile-alt"></i>
            <div style="flex:1;">
              <div class="title">Celular do Irmão</div>
              <div class="desc"><span class="status-dot green"></span> Seguro • Bateria 82%</div>
            </div>
            <i class="fas fa-map-marker-alt" style="font-size:18px; color:#64748b; cursor:pointer;" onclick="alert('Abrindo localização...')"></i>
          </div>

          <div class="list-item">
            <i class="fas fa-mobile-alt"></i>
            <div style="flex:1;">
              <div class="title">Celular da Mãe</div>
              <div class="desc"><span class="status-dot yellow"></span> Em deslocamento • 15km/h</div>
            </div>
            <i class="fas fa-map-marker-alt" style="font-size:18px; color:#64748b; cursor:pointer;" onclick="alert('Abrindo localização...')"></i>
          </div>

          <div class="list-item">
            <i class="fas fa-laptop"></i>
            <div style="flex:1;">
              <div class="title">Notebook Principal</div>
              <div class="desc"><span class="status-dot red"></span> Offline há 2 dias</div>
            </div>
          </div>
        </div>
      </div>

      <div id="reports-screen" class="section">
        <a class="back-link" onclick="showHome()"><i class="fas fa-arrow-left"></i> Voltar</a>
        <div class="auth-box">
          <h3 style="color:#ffffff; margin-bottom:20px;"><i class="fas fa-tower-broadcast" style="color:#00f2fe;"></i> Relatar Incidente</h3>
          <p style="color:#94a3b8; font-size:13px; margin-bottom:15px;">Sua denúncia ajuda a manter o mapa seguro para todos. Permanece anônimo.</p>
          
          <form onsubmit="event.preventDefault(); alert('Denúncia registrada com sucesso e enviada ao radar colaborativo!'); showHome();">
            <div class="form-group">
              <label>Tipo de Ocorrência</label>
              <select class="form-input" style="padding-left:14px; cursor:pointer;" required>
                <option value="" disabled selected>Selecione uma opção...</option>
                <option value="assalto">Assalto / Furto</option>
                <option value="suspeito">Movimento Suspeito</option>
                <option value="iluminacao">Falta de Iluminação</option>
                <option value="acidente">Acidente de Trânsito</option>
              </select>
            </div>
            
            <div class="form-group">
              <label>Localização (Rua, Bairro ou Atual)</label>
              <div class="input-wrapper">
                <i class="fas fa-map-pin"></i>
                <input type="text" class="form-input" placeholder="Onde ocorreu?" required>
              </div>
            </div>

            <div class="form-group">
              <label>Detalhes (Opcional)</label>
              <textarea class="form-input" rows="3" placeholder="Ex: Dois homens em uma moto preta..." style="padding:14px; resize:none;"></textarea>
            </div>

            <button type="submit" class="btn btn-primary" style="background:#ef4444; border-color:#ef4444; box-shadow:0 4px 10px rgba(239, 68, 68, 0.4);">ENVIAR ALERTA</button>
          </form>
        </div>
      </div>

      <div id="settings-screen" class="section">
        <a class="back-link" onclick="showHome()"><i class="fas fa-arrow-left"></i> Voltar</a>
        <div class="auth-box">
          <div style="text-align:center; margin-bottom:18px;">
            <i class="fas fa-gear" style="font-size:44px; color:#00f2fe;"></i>
            <h2 style="margin-top:10px; color:#ffffff;">Configurações</h2>
          </div>
          
          <div class="card-wide" onclick="showProfileView()" style="min-height: 60px;">
            <div class="icon-wrap" style="font-size: 24px;"><i class="fas fa-user-circle"></i></div>
            <div class="mini-title" style="font-size: 16px;">Ver Perfil</div>
          </div>
          
          <div class="card-wide" onclick="showProfileEdit()" style="min-height: 60px;">
            <div class="icon-wrap" style="font-size: 24px;"><i class="fas fa-user-pen"></i></div>
            <div class="mini-title" style="font-size: 16px;">Editar Perfil</div>
          </div>

          <div class="card-wide" onclick="showPreferences()" style="min-height: 60px;">
            <div class="icon-wrap" style="font-size: 24px;"><i class="fas fa-sliders"></i></div>
            <div class="mini-title" style="font-size: 16px;">Preferências do App</div>
          </div>
          
          <div class="card-wide" onclick="showSupport()" style="min-height: 60px;">
            <div class="icon-wrap" style="font-size: 24px;"><i class="fas fa-headset"></i></div>
            <div class="mini-title" style="font-size: 16px;">Suporte</div>
          </div>

          <div class="card-wide" onclick="showLogin()" style="min-height: 60px; color: #ef4444; margin-top: 20px; border-color: rgba(239,68,68,0.3);">
            <div class="icon-wrap" style="font-size: 24px; color: #ef4444;"><i class="fas fa-sign-out-alt"></i></div>
            <div class="mini-title" style="font-size: 16px; color: #ef4444 !important;">Logout</div>
          </div>
        </div>
      </div>

      <div id="support-screen" class="section">
        <a class="back-link" onclick="showSettings()"><i class="fas fa-arrow-left"></i> Voltar</a>
        <div class="auth-box">
          <div style="text-align:center; margin-bottom:18px;">
            <i class="fas fa-headset" style="font-size:44px; color:#00f2fe;"></i>
            <h2 style="margin-top:10px; color:#ffffff;">Suporte</h2>
            <p style="color:#94a3b8; font-size:14px;">Como podemos ajudar você hoje?</p>
          </div>
          
          <div class="list-item" onclick="alert('Iniciando chat seguro com a central operacional...')">
            <i class="fas fa-comments"></i>
            <div style="flex:1;">
              <div class="title">Chat de Emergência</div>
              <div class="desc">Contato silencioso 24/7</div>
            </div>
          </div>

          <div class="list-item" onclick="alert('Abrindo manuais de configuração e uso...')">
            <i class="fas fa-book"></i>
            <div style="flex:1;">
              <div class="title">Base de Conhecimento</div>
              <div class="desc">Tutoriais e FAQs do SafeZone</div>
            </div>
          </div>

          <div class="list-item" onclick="alert('Redirecionando para cliente de e-mail...')">
            <i class="fas fa-envelope"></i>
            <div style="flex:1;">
              <div class="title">Suporte Técnico</div>
              <div class="desc">suporte@safezone.com.br</div>
            </div>
          </div>
        </div>
      </div>

      <div id="profile-view-screen" class="section">
        <a class="back-link" onclick="showSettings()"><i class="fas fa-arrow-left"></i> Voltar</a>
        <div class="auth-box" style="text-align:center;">
          <i class="fas fa-user-circle" style="font-size:64px; color:#00f2fe; margin-bottom:10px;"></i>
          <h3 style="color:#ffffff; margin-bottom:5px;">João Silva</h3>
          <p style="color:#94a3b8; font-size:14px; margin-bottom:20px;">joao.silva@email.com</p>
          
          <div class="info-box" style="text-align:left; background:rgba(2, 6, 23, 0.5); padding:15px; border-radius:12px; border:1px solid #1e293b;">
            <p><strong><i class="fas fa-phone"></i> Telefone:</strong><br>(11) 99999-9999</p>
            <p><strong><i class="fas fa-map-marker-alt"></i> Cidade:</strong><br>São Paulo, SP</p>
            <p><strong><i class="fas fa-shield-alt"></i> Status do Plano:</strong><br>Gratuito</p>
            <p style="margin-bottom:0;"><strong><i class="fas fa-calendar-alt"></i> Membro desde:</strong><br>Jan 2026</p>
          </div>
          
          <button class="btn btn-primary" style="margin-top:20px;" onclick="showProfileEdit()">EDITAR MEUS DADOS</button>
        </div>
      </div>

      <div id="profile-edit-screen" class="section">
        <a class="back-link" onclick="showSettings()"><i class="fas fa-arrow-left"></i> Voltar</a>
        <div class="auth-box">
          <h3 style="color:#ffffff; margin-bottom:20px; text-align:center;">Editar Perfil</h3>
          <form onsubmit="event.preventDefault(); alert('Dados atualizados com sucesso!'); showProfileView();">
            <div class="form-group">
              <label>Nome Completo</label>
              <div class="input-wrapper">
                <i class="fas fa-user"></i>
                <input type="text" class="form-input" value="João Silva" required>
              </div>
            </div>
            <div class="form-group">
              <label>Email</label>
              <div class="input-wrapper">
                <i class="fas fa-envelope"></i>
                <input type="email" class="form-input" value="joao.silva@email.com" required>
              </div>
            </div>
            <div class="form-group">
              <label>Telefone</label>
              <div class="input-wrapper">
                <i class="fas fa-phone"></i>
                <input type="text" class="form-input" value="(11) 99999-9999" required>
              </div>
            </div>
            <div class="form-group">
              <label>Cidade</label>
              <div class="input-wrapper">
                <i class="fas fa-map-marker-alt"></i>
                <input type="text" class="form-input" value="São Paulo, SP" required>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">SALVAR ALTERAÇÕES</button>
          </form>
        </div>
      </div>

      <div id="preferences-screen" class="section">
        <a class="back-link" onclick="showSettings()"><i class="fas fa-arrow-left"></i> Voltar</a>
        <div class="auth-box">
          <h3 style="color:#ffffff; margin-bottom:20px; text-align:center;">Preferências</h3>
          <form onsubmit="event.preventDefault(); alert('Preferências do aplicativo salvas!'); showSettings();">
            
            <div class="toggle-switch">
              <span style="font-weight: bold; color:#cbd5e1;"><i class="fas fa-bell" style="margin-right:8px; color:#00f2fe;"></i> Notificações Push</span>
              <input type="checkbox" checked style="width:20px; height:20px; accent-color:#00f2fe; cursor:pointer;">
            </div>
            
            <div class="toggle-switch">
              <span style="font-weight: bold; color:#cbd5e1;"><i class="fas fa-location-arrow" style="margin-right:8px; color:#00f2fe;"></i> GPS em 2º Plano</span>
              <input type="checkbox" checked style="width:20px; height:20px; accent-color:#00f2fe; cursor:pointer;">
            </div>

            <div class="toggle-switch">
              <span style="font-weight: bold; color:#cbd5e1;"><i class="fas fa-moon" style="margin-right:8px; color:#00f2fe;"></i> Modo Escuro</span>
              <input type="checkbox" checked style="width:20px; height:20px; accent-color:#00f2fe; cursor:pointer;">
            </div>
            
            <div class="toggle-switch">
              <span style="font-weight: bold; color:#cbd5e1;"><i class="fas fa-volume-up" style="margin-right:8px; color:#00f2fe;"></i> Sons de Alerta</span>
              <input type="checkbox" checked style="width:20px; height:20px; accent-color:#00f2fe; cursor:pointer;">
            </div>

            <button type="submit" class="btn btn-primary">SALVAR PREFERÊNCIAS</button>
          </form>
        </div>
      </div>

      <div id="golden-screen" class="section">
        <a class="back-link" onclick="showHome()"><i class="fas fa-arrow-left"></i> Voltar</a>
        <div class="auth-box golden-card">
          <div style="text-align:center; margin-bottom:18px;">
            <i class="fas fa-crown" style="font-size:44px; color:#fff;"></i>
            <h2 style="margin-top:10px; color:#fff; font-weight: 900;">SafeZone Golden</h2>
            <p style="color:#fff; font-size:14px; opacity: 0.9;">Eleve sua segurança ao nível máximo.</p>
          </div>
          
          <div style="background: rgba(255,255,255,0.2); border-radius: 12px; padding: 15px; margin-bottom: 20px;">
            <ul class="golden-list">
              <li><i class="fas fa-check-circle"></i> <span><b>IA Preditiva Avançada:</b> Algoritmos de ponta atualizados ao vivo para calcular rotas sem atraso.</span></li>
              <li><i class="fas fa-check-circle"></i> <span><b>Fake Screen Premium:</b> Crie uma interface inteira idêntica ao seu banco, com saldos e faturas falsas (Modo Coação).</span></li>
              <li><i class="fas fa-check-circle"></i> <span><b>Radar Ilimitado:</b> Alertas de segurança no trajeto sem limite de uso.</span></li>
              <li><i class="fas fa-check-circle"></i> <span><b>Contato Prioritário 24/7:</b> Botão de pânico silencioso conectado diretamente às centrais táticas.</span></li>
              <li><i class="fas fa-check-circle"></i> <span><b>Experiência Limpa:</b> Zero anúncios ou interrupções, porque cada segundo conta.</span></li>
            </ul>
          </div>
          
          <button onclick="showPayment()" class="btn-golden">
            ASSINAR POR R$ 19,90 / mês
          </button>
          <div style="text-align:center; margin-top: 15px; font-size: 11px; opacity: 0.8;">
            Cancele quando quiser.
          </div>
        </div>
      </div>

      <div id="payment-screen" class="section">
        <a class="back-link" onclick="showGolden()"><i class="fas fa-arrow-left"></i> Voltar</a>
        <div class="auth-box">
          <div style="text-align:center; margin-bottom:18px;">
            <i class="fas fa-credit-card" style="font-size:44px; color:#00f2fe;"></i>
            <h2 style="margin-top:10px; color:#ffffff;">Pagamento</h2>
            <p style="color:#94a3b8; font-size:14px;">Assinatura: SafeZone Golden</p>
          </div>
          
          <form onsubmit="processarPagamento(event)">
            <div class="form-group">
              <label>Número do Cartão</label>
              <div class="input-wrapper">
                <i class="fas fa-credit-card"></i>
                <input type="text" class="form-input" placeholder="0000 0000 0000 0000" maxlength="19" required>
              </div>
            </div>
            
            <div class="form-group">
              <label>Nome no Cartão</label>
              <div class="input-wrapper">
                <i class="fas fa-user"></i>
                <input type="text" class="form-input" placeholder="Como impresso no cartão" required>
              </div>
            </div>
            
            <div style="display:flex; gap:10px;">
              <div class="form-group" style="flex:1;">
                <label>Validade</label>
                <div class="input-wrapper">
                  <i class="fas fa-calendar-alt"></i>
                  <input type="text" class="form-input" placeholder="MM/AA" maxlength="5" required>
                </div>
              </div>
              <div class="form-group" style="flex:1;">
                <label>CVV</label>
                <div class="input-wrapper">
                  <i class="fas fa-lock"></i>
                  <input type="password" class="form-input" placeholder="123" maxlength="4" required>
                </div>
              </div>
            </div>
            
            <button type="submit" class="btn btn-primary" style="background:#f59e0b; border-color:#f59e0b; box-shadow:0 4px 10px rgba(245, 158, 11, 0.4); margin-top:10px; font-size: 16px;">
              CONFIRMAR R$ 19,90
            </button>
            <div style="text-align:center; margin-top:15px; color:#64748b; font-size:12px;">
              <i class="fas fa-shield-alt"></i> Pagamento 100% seguro
            </div>
          </form>
        </div>
      </div>

      <div id="maps-screen" class="section">
        <a class="back-link" onclick="showHome()"><i class="fas fa-arrow-left"></i> Voltar</a>
        <div class="auth-box" style="height: 550px; padding: 10px;">
          <h3 style="color:#ffffff; margin-bottom: 10px; font-size:18px; text-align:center;">Sua Localização Atual</h3>
          <iframe id="map-iframe" width="100%" height="90%" style="border:0; border-radius:12px;" loading="lazy" allowfullscreen></iframe>
        </div>
      </div>

      <div id="rating-screen" class="section">
        <a class="back-link" onclick="showHome()"><i class="fas fa-arrow-left"></i> Voltar</a>
        <div class="auth-box">
          <div style="text-align:center; margin-bottom:18px;">
            <i class="fas fa-star" style="font-size:44px; color:#f59e0b;"></i>
            <h2 style="margin-top:10px; color:#ffffff;">Avalie-nos</h2>
            <p style="color:#94a3b8; font-size:14px;">O que você está achando do app?</p>
          </div>
          <div class="star-rating" id="star-container">
            <i class="fas fa-star" data-value="1"></i>
            <i class="fas fa-star" data-value="2"></i>
            <i class="fas fa-star" data-value="3"></i>
            <i class="fas fa-star" data-value="4"></i>
            <i class="fas fa-star" data-value="5"></i>
          </div>
          <form onsubmit="submitRating(event)">
            <div class="form-group" style="margin-top:15px;">
              <textarea id="feedback-text" class="form-input" rows="4" placeholder="Deixe um comentário ou sugestão (opcional)..." style="padding: 14px; resize: none;"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">ENVIAR AVALIAÇÃO</button>
          </form>
        </div>
      </div>

      <div id="search-screen" class="section">
        <div class="search-header-text">
          <a onclick="showHome()" style="color:#fff; cursor:pointer;"><i class="fas fa-arrow-left"></i></a>
          <span id="search-query-display">Resultados</span>
        </div>
        
        <div class="search-tabs">
          <div id="tab-tudo" class="search-tab active" onclick="changeSearchTab('tudo')">Tudo</div>
          <div id="tab-imagens" class="search-tab" onclick="changeSearchTab('imagens')">Imagens</div>
          <div id="tab-videos" class="search-tab" onclick="changeSearchTab('videos')">Vídeos</div>
          <div id="tab-noticias" class="search-tab" onclick="changeSearchTab('noticias')">Notícias</div>
        </div>
        
        <div id="search-content-area">
          </div>
      </div>

    </div>
  </div>

  <script>
    const loginScreen = document.getElementById('login-screen');
    const registerScreen = document.getElementById('register-screen');
    const homeScreen = document.getElementById('home-screen');
    const forgotScreen = document.getElementById('forgot-screen');
    const mapsScreen = document.getElementById('maps-screen');
    const ratingScreen = document.getElementById('rating-screen');
    const searchScreen = document.getElementById('search-screen');
    const goldenScreen = document.getElementById('golden-screen'); 
    const paymentScreen = document.getElementById('payment-screen'); 
    const settingsScreen = document.getElementById('settings-screen'); 
    const supportScreen = document.getElementById('support-screen');
    
    // Telas de Perfil/Config
    const profileViewScreen = document.getElementById('profile-view-screen');
    const profileEditScreen = document.getElementById('profile-edit-screen');
    const preferencesScreen = document.getElementById('preferences-screen');
    
    // Telas da Home
    const infoScreen = document.getElementById('info-screen');
    const notificationsScreen = document.getElementById('notifications-screen');
    const devicesScreen = document.getElementById('devices-screen');
    const reportsScreen = document.getElementById('reports-screen');

    let resendInterval;
    let countdown = 30;
    let currentRating = 0;
    let currentSearchQuery = '';

    function hideAll() { 
      document.querySelectorAll('.section').forEach(el => el.classList.remove('active'));
    }

    // Navegação Auth/Main
    function showLogin() { hideAll(); loginScreen.classList.add('active'); }
    function showRegister() { hideAll(); registerScreen.classList.add('active'); }
    function showHome() { hideAll(); homeScreen.classList.add('active'); document.getElementById('top-search-input').value = ''; }
    
    // Navegação Menu Principal
    function showSafezoneInfo() { hideAll(); infoScreen.classList.add('active'); }
    function showNotifications() { hideAll(); notificationsScreen.classList.add('active'); }
    function showDevices() { hideAll(); devicesScreen.classList.add('active'); }
    function showReports() { hideAll(); reportsScreen.classList.add('active'); }

    // Navegação Configurações/Perfil
    function showSettings() { hideAll(); settingsScreen.classList.add('active'); } 
    function showProfileView() { hideAll(); profileViewScreen.classList.add('active'); }
    function showProfileEdit() { hideAll(); profileEditScreen.classList.add('active'); }
    function showPreferences() { hideAll(); preferencesScreen.classList.add('active'); }
    function showSupport() { hideAll(); supportScreen.classList.add('active'); }
    
    // Navegação Extras
    function showGolden() { hideAll(); goldenScreen.classList.add('active'); } 
    function showPayment() { hideAll(); paymentScreen.classList.add('active'); } 

    function processarPagamento(e) {
      e.preventDefault();
      alert("Pagamento processado com sucesso!\\nBem-vindo ao SafeZone Golden.");
      showHome();
    }

    /* --- Lógica do Buscador Real --- */
    function realizarBusca(e) {
      e.preventDefault();
      const query = document.getElementById('top-search-input').value.trim();
      if(!query) return;
      currentSearchQuery = query;
      
      hideAll();
      searchScreen.classList.add('active');
      document.getElementById('search-query-display').innerText = "Busca: " + query;
      
      changeSearchTab('tudo');
    }

    function changeSearchTab(tab) {
      ['tudo', 'imagens', 'videos', 'noticias'].forEach(function(t) {
        document.getElementById('tab-' + t).classList.remove('active');
      });
      document.getElementById('tab-' + tab).classList.add('active');

      const contentArea = document.getElementById('search-content-area');
      contentArea.innerHTML = '<div style="text-align:center; padding:30px; color:#fff;"><i class="fas fa-spinner fa-spin fa-2x"></i></div>';

      if(tab === 'tudo') {
        const url = 'https://pt.wikipedia.org/w/api.php?action=query&list=search&srsearch=' + encodeURIComponent(currentSearchQuery) + '&utf8=&format=json&origin=*';
        fetch(url)
          .then(res => res.json())
          .then(data => {
            let html = '';
            if(data.query && data.query.search.length > 0) {
              data.query.search.forEach(item => {
                html += '<div class="search-result-item">' +
                        '<div class="search-result-title">' + item.title + '</div>' +
                        '<div class="search-result-snippet">' + item.snippet + '...</div>' +
                        '</div>';
              });
            } else {
              html = '<div class="search-result-item" style="text-align:center; color:#ef4444; font-weight:bold;">' +
                     'Nenhuma informação encontrada.</div>';
            }
            contentArea.innerHTML = html;
          })
          .catch(err => { contentArea.innerHTML = '<div class="search-result-item">Erro ao buscar informações.</div>'; });

      } else if (tab === 'imagens') {
        const url = 'https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=' + encodeURIComponent(currentSearchQuery) + '&gsrlimit=10&gsrnamespace=6&prop=imageinfo&iiprop=url&format=json&origin=*';
        fetch(url)
          .then(res => res.json())
          .then(data => {
            if(data.query && data.query.pages) {
               let html = '<div class="mock-img-grid">';
               Object.values(data.query.pages).forEach(page => {
                  if(page.imageinfo && page.imageinfo[0]) {
                     html += '<div class="mock-img" style="background-image:url(' + page.imageinfo[0].url + ');"></div>';
                  }
               });
               html += '</div>';
               contentArea.innerHTML = html;
            } else {
               contentArea.innerHTML = '<div class="search-result-item" style="text-align:center;">Nenhuma imagem pública encontrada para "' + currentSearchQuery + '".</div>';
            }
          })
          .catch(err => { contentArea.innerHTML = '<div class="search-result-item">Erro ao buscar imagens.</div>'; });

      } else if (tab === 'videos') {
        contentArea.innerHTML = '<div class="search-result-item" style="padding:0; overflow:hidden; border-radius:12px; background:#000;">' +
          '<iframe width="100%" height="250" src="https://www.youtube.com/embed?listType=search&list=' + encodeURIComponent(currentSearchQuery) + '&playsinline=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border-radius:12px; display:block;"></iframe>' +
          '</div>' +
          '<div class="search-result-item" style="text-align:center; font-size:13px; color:#94a3b8;">' +
          'Você pode assistir aos vídeos da pesquisa <b>' + currentSearchQuery + '</b> diretamente no player acima, sem sair do aplicativo.</div>';

      } else if (tab === 'noticias') {
        const url = 'https://pt.wikipedia.org/w/api.php?action=query&list=search&srsearch=' + encodeURIComponent(currentSearchQuery) + '&srsort=last_edit_desc&utf8=&format=json&origin=*';
        fetch(url)
          .then(res => res.json())
          .then(data => {
            let html = '';
            if(data.query && data.query.search.length > 0) {
              data.query.search.forEach((item, index) => {
                let tempo = index === 0 ? "Agora mesmo" : "Há " + (index * 2) + " horas";
                html += '<div class="search-result-item">' +
                        '<div class="search-result-title" style="color:#ef4444;">' + item.title + '</div>' +
                        '<div class="search-result-snippet" style="margin-bottom:8px;">' + item.snippet + '...</div>' +
                        '<div style="font-size:11px; color:#64748b; font-weight:bold;"><i class="fas fa-clock"></i> ' + tempo + ' • Últimas atualizações</div>' +
                        '</div>';
              });
            } else {
              html = '<div class="search-result-item" style="text-align:center;">Nenhuma notícia recente encontrada.</div>';
            }
            contentArea.innerHTML = html;
          })
          .catch(err => { contentArea.innerHTML = '<div class="search-result-item">Erro ao buscar notícias.</div>'; });
      }
    }

    function showForgot() {
      hideAll();
      clearInterval(resendInterval);
      forgotScreen.classList.add('active');
      document.getElementById('forgot-form').style.display = 'block';
      document.getElementById('verify-form').style.display = 'none';
      document.getElementById('forgot-subtitle').textContent = 'Digite seu e-mail de cadastro para receber um código de verificação.';
      document.getElementById('forgot-email').value = '';
    }

    function iniciarCronometro() {
      clearInterval(resendInterval);
      countdown = 30;
      const resendLink = document.getElementById('resend-link');
      
      resendLink.style.color = '#64748b';
      resendLink.style.cursor = 'not-allowed';
      resendLink.onclick = null;
      resendLink.innerHTML = 'Reenviar código em <span id="timer">' + countdown + '</span>s';

      resendInterval = setInterval(function() {
        countdown--;
        const timerSpan = document.getElementById('timer');
        if (timerSpan) timerSpan.innerText = countdown;
        
        if (countdown <= 0) {
          clearInterval(resendInterval);
          resendLink.style.color = '#00f2fe';
          resendLink.style.cursor = 'pointer';
          resendLink.innerHTML = 'Reenviar código';
          resendLink.onclick = enviarCodigo;
        }
      }, 1000);
    }

    function enviarCodigo(e) {
      if(e) e.preventDefault();
      const email = document.getElementById('forgot-email').value || 'seu e-mail';
      alert('Simulação: Código disparado para ' + email);
      document.getElementById('forgot-form').style.display = 'none';
      document.getElementById('verify-form').style.display = 'block';
      document.getElementById('forgot-subtitle').innerHTML = 'Código enviado para <strong>' + email + '</strong>.';
      iniciarCronometro();
    }

    function verificarCodigo(e) {
      e.preventDefault();
      alert('Código verificado! Redirecionando (simulação).');
      showLogin();
    }

    function showMaps() {
      hideAll();
      mapsScreen.classList.add('active');
      const iframe = document.getElementById('map-iframe');
      
      if (navigator.geolocation) {
        iframe.src = "https://maps.google.com/maps?q=Brasil&z=4&output=embed";
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            iframe.src = "https://maps.google.com/maps?q=" + lat + "," + lon + "&z=16&output=embed";
          },
          (error) => {
            alert("Não foi possível obter sua localização exata. Mostrando mapa padrão.");
          }
        );
      } else {
        iframe.src = "https://maps.google.com/maps?q=Brasil&z=4&output=embed";
      }
    }

    function showRating() {
      hideAll();
      ratingScreen.classList.add('active');
      currentRating = 0;
      updateStarsUI(0);
      document.getElementById('feedback-text').value = '';
    }

    const stars = document.querySelectorAll('#star-container .fa-star');
    stars.forEach(star => {
      star.addEventListener('click', function() {
        currentRating = this.getAttribute('data-value');
        updateStarsUI(currentRating);
      });
    });

    function updateStarsUI(rating) {
      stars.forEach(star => {
        if (star.getAttribute('data-value') <= rating) {
          star.classList.add('active');
        } else {
          star.classList.remove('active');
        }
      });
    }

    function submitRating(e) {
      e.preventDefault();
      if(currentRating == 0) {
        alert('Por favor, selecione pelo menos uma estrela antes de enviar.');
        return;
      }
      const feedback = document.getElementById('feedback-text').value;
      alert("Obrigado! Você nos avaliou com " + currentRating + " estrela(s).\\n\\nSeu feedback: \\"" + (feedback || "Sem comentários") + "\\" foi recebido com sucesso.");
      showHome();
    }

    function updateBrasiliaTime() {
      const now = new Date();
      const timeString = now.toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit', hour12: false });
      document.getElementById('clock-brasilia').textContent = timeString;
    }
    
    setInterval(updateBrasiliaTime, 1000);
    updateBrasiliaTime();
  <\/script>
</body>
</html>`;

  const blob = new Blob([appHTML], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = 'safezone_app.html';
  document.body.appendChild(a);
  a.click();
  
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
