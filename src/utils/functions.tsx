/**
 * Return an error object to check in the container - used in Adapters catch block
 * @param errorMessage Error message
 * @returns {hasError: boolean, errorMessage: string} Error object
 */
export const returnBackServiceError = (errorMessage: string) => ({ hasError: true, errorMessage })

/**
 * Concatenate classNames for several scss classes in modules
 * @param  {string[]} classNames Different classNames
 * @returns {string} String of concatenated classes
 */
export const concatClassNames = (...classNames: (string | undefined | boolean)[]): string =>
  classNames.filter((className) => !!className).join(' ')

export const currencyFormatter = (currency: string, value: number) => {
  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    minimumFractionDigits: 0,
    currency,
  })

  return formatter.format(value)
}

/**
 *  The input of this functions is a string with \n that represents line breaks.
 * @param text: string
 * @returns formatted text with line breaks
 */
export const TextFormatter = (text: string) => {
  // separate text lines
  const lines = text.split('\n')

  return (
    <>
      {lines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </>
  )
}

export default TextFormatter
