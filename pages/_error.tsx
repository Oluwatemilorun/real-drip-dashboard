import React, { Component } from 'react'
import { NextPageContext } from 'next'
import { ErrorProps } from 'next/error'

// interface Error extends _Error {
// 	statusCode: number,
// 	message?: string
// }

export default class Error extends Component<ErrorProps> {
	static getInitialProps = ({ res, err }: NextPageContext) => {
		const statusCode = res ? res.statusCode : err ? err.statusCode : 404
		return { statusCode }
	}

	render() {
		return (
			<p>
				{
					this.props.statusCode
						? `An error ${this.props.statusCode} occurred on server`
						: 'An error occurred on client'
				}
			</p>
		)
	}

}