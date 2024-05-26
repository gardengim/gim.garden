export default ({ children, title }) => `
    <head>
        <title>${title}</title>
    </head>
    <body>
        ${children}
    </body>
`;
