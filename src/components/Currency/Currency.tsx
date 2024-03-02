import styles from './Currency.module.scss'

const Currency = ({
  amount,
  decimals,
  tag,
}: {
  amount: string
  decimals: number | string
  tag: 'h1' | 'h2'
}) => {
  return (
    <div className={styles.currencyContainer}>
      {tag === 'h1' && <h1 className={styles.currency}>{amount}</h1>}
      {tag === 'h2' && <h2 className={styles.currency}>{amount}</h2>}
      <span className={styles.decimals}>{decimals}</span>
    </div>
  )
}

export default Currency
