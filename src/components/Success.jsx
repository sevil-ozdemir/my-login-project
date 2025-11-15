export default function Success() {
  return (
    <div style={{ maxWidth: 420, margin: '64px auto', padding: 24 }}>
      <h1>Başarılı!</h1>
      <p data-cy="success-message">
        Giriş başarılı. Bu geçici success sayfasıdır.
      </p>
    </div>
  )
}
