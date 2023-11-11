import React from 'react';

type NotificationInfoProps = React.ComponentProps<'section'> & {
	notifications: Notification[];
};

const NotificationInfo: React.FC<NotificationInfoProps> = ({
	notifications,
}) => {
	return <div>NotificationInfo</div>;
};

export default NotificationInfo;
