export default function WhatsApp() {
  const phone = '917550170694'
  const msg = encodeURIComponent('Hi Polivium! I\'m interested in learning more about your solar energy solutions. Could you help me with a consultation?')
  const url = `https://wa.me/${phone}?text=${msg}`

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="whatsapp-btn" aria-label="Chat on WhatsApp">
      <svg viewBox="0 0 32 32" width="28" height="28" fill="#fff">
        <path d="M16.004 0C7.165 0 .003 7.16.003 15.997c0 2.82.737 5.573 2.14 7.998L.01 32l8.186-2.09a15.94 15.94 0 007.808 2.03c8.838 0 15.996-7.16 15.996-15.997C32 7.16 24.842 0 16.004 0zm0 29.29a13.27 13.27 0 01-7.09-2.04l-.508-.302-4.86 1.24 1.296-4.728-.332-.527A13.24 13.24 0 012.72 15.997c0-7.32 5.96-13.28 13.284-13.28 7.322 0 13.28 5.96 13.28 13.28 0 7.322-5.958 13.293-13.28 13.293zm7.27-9.94c-.398-.2-2.358-1.164-2.724-1.296-.366-.134-.632-.2-.898.2-.266.398-1.03 1.296-1.264 1.562-.232.266-.466.3-.864.1-.398-.2-1.682-.62-3.204-1.976-1.184-1.056-1.984-2.36-2.216-2.758-.232-.398-.024-.614.174-.812.178-.178.398-.466.598-.698.2-.232.266-.398.398-.664.134-.266.068-.498-.032-.698-.1-.2-.898-2.164-1.23-2.962-.324-.778-.654-.672-.898-.684l-.764-.014c-.266 0-.698.1-1.064.498-.366.398-1.396 1.364-1.396 3.328 0 1.964 1.43 3.862 1.63 4.128.2.266 2.814 4.296 6.82 6.024.952.412 1.696.658 2.276.842.956.304 1.826.262 2.514.158.766-.114 2.358-.964 2.69-1.894.334-.93.334-1.728.234-1.894-.1-.166-.366-.266-.764-.466z"/>
      </svg>
      <style>{`
        .whatsapp-btn{position:fixed;bottom:24px;right:24px;z-index:9999;width:56px;height:56px;border-radius:50%;background:#25D366;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(37,211,102,.4);transition:transform .2s,box-shadow .2s}
        .whatsapp-btn:hover{transform:scale(1.1);box-shadow:0 6px 24px rgba(37,211,102,.5)}
      `}</style>
    </a>
  )
}
