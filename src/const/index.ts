import {  CpuIcon, CreditCardIcon, PlusCircle, Settings2 } from "lucide-react";

export const menuItems = [
  {
    title: "WorkFlows",
    items: [
      {
        title: "WorkFlows",
        icon: PlusCircle,
        url: "/workflows",
      },
      {
        title: "Connection",
        icon: CpuIcon,
        url: "/connections",
      },
      {
        title: "Account",
        icon: Settings2,
        url: "/account",
      },
      {
        title: "Billings",
        icon: CreditCardIcon,
        url: "/bills",
      },
    ],
  },
];

export const s3URL = "https://dqs8qc9o4jfra.cloudfront.net";



export const CONNECTIONS = [
  {
    title: 'Google Drive',
    description: 'Connect your google drive to listen to folder changes',
    image: '/google-drive.png',
    connectionKey: 'googleNode',
    alwaysTrue: true,
  },
  {
    title: 'Discord',
    description: 'Connect your discord to send notification and messages',
    image: '/discord.png',
    connectionKey: 'discordNode',
    accessTokenKey: 'webhookURL',
  },
  {
    title: 'Notion',
    description: 'Create entries in your notion dashboard and automate tasks.',
    image: '/notion.svg',
    connectionKey: 'notionNode',
    accessTokenKey: 'accessToken',
  },
  {
    title: 'Slack',
    description:
      'Use slack to send notifications to team members through your own custom bot.',
    image: '/slack.png',
    connectionKey: 'slackNode',
    accessTokenKey: 'slackAccessToken',
    slackSpecial: true,
  },
]