import {assert} from 'chai';
import {renderComponent} from 'support/rendering';
import FixedLayoutAside from 'components/layouts/FixedLayoutAside';

describe('FixedLayoutAside', () => {

  it('renders default', () => {
    let {props} = renderComponent(FixedLayoutAside, {}, ['foo']);
    assert.deepEqual(props, {
      children: ['foo'],
      className: '',
      style: {
        display: 'table-cell',
        verticalAlign: 'top'
      }
    });
  });

  it('renders custom className', () => {
    let {props} = renderComponent(FixedLayoutAside, {className: 'Test'});
    assert.equal(props.className, 'Test');
  });

  it('renders custom valign', () => {
    let {props} = renderComponent(FixedLayoutAside, {valign: 'middle'});
    assert.equal(props.style.verticalAlign, 'middle');
  });
});
