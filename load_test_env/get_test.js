import { sleep, check, group } from 'k6';
import http from 'k6/http';

export let options = {
    stages: [
        { target: 30, duration: '20s' },
        { target: 50, duration: '30s' },
        { target: 3, duration: '10s' }
    ],
    thresholds: {
        http_req_duration: ['avg < 15000'],
    },
};

export default () => {
    group('Quadrant Test', function() {

        group("Hit Home", function() {
            let res = http.get('https://www.quadrant.io/');
            check(res, {
                'status is 200': () => res.status === 200,
            });
        });

        group("Hit About Us", function() {
            let res = http.get('https://www.quadrant.io/team');
            check(res, {
                'status is 200': () => res.status === 200,
            });
        });

    });
    sleep(1);
};