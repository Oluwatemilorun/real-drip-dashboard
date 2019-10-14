import React, { ComponentProps } from 'react'
import { NextPage } from 'next'

import {
	Grid,
	Typography,
	TextField,
	Button
} from '@material-ui/core'

import { AuthLayout } from '@/layouts'
import { Styles } from './style'

import * as bg from '@/assets/img/bg/005.svg'

// interface SigninPage

const ManagementSignin = () => {
	const styles = Styles()

	return (
		<AuthLayout background={bg}>
			<Grid xs>
				<Grid item xs={12}>
					<Typography color="primary" variant="h6" className={styles.subheading}>Welcome Back!</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="h3" className={styles.title}>Management Sign In</Typography>
				</Grid>
				<Grid container item xs={12} spacing={2}>
					<Grid item xs={12} md={6}>
						<TextField
							fullWidth
							label="Ward Username"
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							fullWidth
							label="Password"
							variant="outlined"
							inputMode="password"
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<Button variant="contained" fullWidth color="primary" size="large" style={{ color: '#fff' }}>
							sign in
						</Button>
					</Grid>
				</Grid>
			</Grid>
			<Grid>
				<Typography variant="caption">
					Don't have a RealDrip management account?
				</Typography>
				<Button variant="text" size="small" color="primary" href="/management/signup">Activate</Button>
			</Grid>
		</AuthLayout>
	)
}

export default ManagementSignin