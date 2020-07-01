import tape from 'tape';
import tapSpec from 'tap-spec';

tape.createStream()
    .pipe(tapSpec())
    .pipe(process.stdout);

export default tape;
