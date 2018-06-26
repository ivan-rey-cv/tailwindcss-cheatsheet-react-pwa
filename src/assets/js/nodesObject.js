import Backgrounds from './cheat-sheet/backgrounds';
import Borders from './cheat-sheet/borders';
import Flexbox from './cheat-sheet/flexbox';
import Interactivity from './cheat-sheet/interactivity';
import Layout from './cheat-sheet/layout';
import Miscellaneous from './cheat-sheet/miscellaneous';
import Sizing from './cheat-sheet/sizing';
import Spacing from './cheat-sheet/spacing';
import Tables from './cheat-sheet/tables';
import Typography from './cheat-sheet/typography';

export default {
	Backgrounds: Backgrounds.children.map(v => v.title),
	Borders: Borders.children.map(v => v.title),
	Layout: Layout.children.map(v => v.title),
	Miscellaneous: Miscellaneous.children.map(v => v.title),
	Flexbox: Flexbox.children.map(v => v.title),
	Sizing: Sizing.children.map(v => v.title),
	Interactivity: Interactivity.children.map(v => v.title),
	Spacing: Spacing.children.map(v => v.title),
	Tables: Tables.children.map(v => v.title),
	Typography: Typography.children.map(v => v.title)
};
