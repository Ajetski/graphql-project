import { gql } from 'graphql-request';

export const GET_MESSAGES = gql`
	query Messages($channelId: Int!, $pageInfo: PageInfo!) {
		messages(channelId: $channelId, pageInfo: $pageInfo) {
			id
			text
			author {
				id
				username
			}
			channel {
				id
				name
			}
		}
	}
`;
