import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{margin:0;
padding: 0};

table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
};
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
  font-family: 'Poppins','Sans-serif';
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
/* $general-background : #2F303A;

$dark-color: #202027;
$hover-ligth: #202027; 
$border-inputs: #2E3852;
$input-focus: #596da0;

$button-bck: #1762A7;
$button-hover: #2180d8;
$button-focus: #2796ff;
$accent-text:#2796ff;

$circle1: #bc3a801a;
$circle2: #3457b21a; */
`;
