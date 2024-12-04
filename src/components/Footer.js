export default function Footer() {
    return (
      <footer className="footer">
        <div className="footer-section">
          <div className="footer-title">FORMAS DE PAGAMENTO</div>
          <div className="footer-payment-methods">
            <div className="payment-method">
              <i className="fa-brands fa-cc-visa payment-icon"></i>
              <span>Visa</span>
            </div>
            <div className="payment-method">
              <i className="fa-brands fa-cc-mastercard payment-icon"></i>
              <span>Mastercard</span>
            </div>
            <div className="payment-method">
              <i className="fa-brands fa-pix payment-icon"></i>
              <span>Pix</span>
            </div>
            <div className="payment-method">
              <i className="fa-solid fa-barcode payment-icon"></i>
              <span>Boleto</span>
            </div>
          </div>
        </div>
  
        <div className="footer-section">
          <div className="footer-title">ENTREGA</div>
          <div className="footer-shipping">
            <img src="/correios.png" alt="Correios" className="shipping-company" />
            <img src="/jadlog.png" alt="Jadlog" className="shipping-company" />
          </div>
        </div>
  
        <div className="footer-links">
          <a href="#" className="footer-link">Política de Privacidade</a>
          <a href="#" className="footer-link">Termos de Serviço</a>
          <a href="#" className="footer-link">Política de Direitos Autorais</a>
          <a href="#" className="footer-link">Central de Ajuda</a>
        </div>
  
        <div className="footer-separator"></div>
  
        <div className="footer-bottom">
          <img src="/logo.png" alt="Shopee" className="footer-logo" />
          <div className="footer-copyright">© 2024 Shopee. Todos os direitos reservados.</div>
          <div className="footer-region">
            <img src="/brasil.png" alt="BR" className="region-flag" />
            Brasil
          </div>
        </div>
      </footer>
    )
  }
  