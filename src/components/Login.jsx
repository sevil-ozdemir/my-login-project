import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const strongPasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [accepted, setAccepted] = useState(false)
  const [touched, setTouched] = useState({ email: false, password: false })

  const errors = useMemo(() => {
    const e = {}
    if (!email) e.email = 'E-posta gerekli'
    else if (!emailRegex.test(email)) e.email = 'Geçerli bir e-posta girin'

    if (!password) e.password = 'Şifre gerekli'
    else if (!strongPasswordRegex.test(password)) {
      e.password =
        'Şifre en az 8 karakter, bir büyük/küçük harf, rakam ve özel karakter içermeli'
    }

    if (!accepted) e.accepted = 'Kuralları kabul etmelisiniz'
    return e
  }, [email, password, accepted])

  const isValid = useMemo(() => {
    return (
      emailRegex.test(email) &&
      strongPasswordRegex.test(password) &&
      accepted === true
    )
  }, [email, password, accepted])

  function handleSubmit(e) {
    e.preventDefault()
    if (!isValid) return
    navigate('/success')
  }

  return (
    <div style={{ maxWidth: 420, margin: '64px auto', padding: 24 }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} noValidate data-cy="login-form">
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="email">E-posta</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            style={{ width: '100%', padding: '8px 10px', marginTop: 6 }}
            data-cy="email-input"
          />
          {touched.email && errors.email && (
            <small style={{ color: '#b00020' }} data-cy="email-error">
              {errors.email}
            </small>
          )}
        </div>

        <div style={{ marginBottom: 12 }}>
          <label htmlFor="password">Şifre</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, password: true }))}
            style={{ width: '100%', padding: '8px 10px', marginTop: 6 }}
            data-cy="password-input"
          />
          {touched.password && errors.password && (
            <small style={{ color: '#b00020' }} data-cy="password-error">
              {errors.password}
            </small>
          )}
        </div>

        <div style={{ marginBottom: 12 }}>
          <label style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              data-cy="terms-checkbox"
            />
            Şartları kabul ediyorum
          </label>
          {!accepted && (
            <small style={{ color: '#b00020' }} data-cy="terms-error">
              {errors.accepted}
            </small>
          )}
        </div>

        <button
          type="submit"
          disabled={!isValid}
          data-cy="submit-button"
          style={{
            width: '100%',
            padding: '10px 12px',
            background: isValid ? '#1a73e8' : '#9aa0a6',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            cursor: isValid ? 'pointer' : 'not-allowed',
          }}
        >
          Giriş Yap
        </button>
      </form>
    </div>
  )
}
