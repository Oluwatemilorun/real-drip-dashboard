import React, { Component } from 'react'
import { NextPage } from 'next'

import {
	Grid,
	Typography,
	Button
} from '@material-ui/core'

import { BlankLayout } from '@/layouts'
import { Theme } from '@/lib/theme'

const Home = () => {

	return (
		<BlankLayout>
			<Grid item xs={10} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
				<Typography align="center" gutterBottom variant="h2" display="block" style={{ fontWeight: 'bold', marginBottom: '30%' }}>
					Infusion Management System
				</Typography>
				<Typography align="center" gutterBottom variant="h6" display="block" style={{ fontWeight: 'bold' }}>
					Login to
				</Typography>
				<Grid container justify="center" spacing={2}>
					<Grid item xs={12} sm={6} md={2}>
						<Button variant="contained" fullWidth style={{ color: Theme.palette.primary.main, backgroundColor: '#fff' }} href="/management/signin">
							Management
						</Button>
					</Grid>
					<Grid item xs={12} sm={6} md={2}>
						<Button variant="contained" fullWidth color="primary" style={{ color: '#fff' }} href="/ward/signin">
							Ward
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</BlankLayout>
	)
}

export default Home;