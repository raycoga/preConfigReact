import React from 'react'
import { FormattedMessage } from 'react-intl'

/* Value es un contenido variable que se puede agregar al string traducido */
const translate = ({id, value={}}) =>  <FormattedMessage id={id} values={{...value}}/>

export default translate