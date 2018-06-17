import Sizing from './cheat-sheet/sizing';
import Spacing from './cheat-sheet/spacing';
import Typography from './cheat-sheet/typography';

export default {
	Sizing: Sizing.children.map(v => v.title),
	Spacing: Spacing.children.map(v => v.title),
	Typography: Typography.children.map(v => v.title)
};
