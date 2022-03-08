import fshUtils from '@/fshUtils';
import { useEffect, useState, forceUpdate } from 'react';
import { Button, Card } from 'antd';
import styles from './astar.less';
import test, { updateState, registries, useNoRedux } from '@/states/noReduxState';

export default () => {
	console.log('test', test, registries)
	useNoRedux();
	const onClick = e => {
		updateState({
			name: 2
		});
	}
	return (
		<div>
			{test.name}<Button onClick={onClick}>点我</Button>
		</div>
	);
}