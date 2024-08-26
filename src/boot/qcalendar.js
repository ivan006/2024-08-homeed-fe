import { boot } from 'quasar/wrappers';
import QCalendar from '@quasar/quasar-ui-qcalendar';

export default boot(({ app }) => {
  app.use(QCalendar);
});
