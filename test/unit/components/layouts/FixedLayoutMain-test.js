import {assert} from 'chai';
import {renderComponent} from 'support/rendering';
import FixedLayoutMain from 'components/layouts/FixedLayoutMain';

describe('FixedLayoutMain', () => {

  it('renders default', () => {
    let {props} = renderComponent(FixedLayoutMain, {}, ['foo']);
    assert.deepEqual(props, {
      children: ['foo'],
      className: '',
      style: {
        width: '100%',
        display: 'table-cell',
        verticalAlign: 'top'
      }
    });
  });

  it('renders custom className', () => {
    let {props} = renderComponent(FixedLayoutMain, {className: 'Test'});
    assert.equal(props.className, 'Test');
  });

  it('renders custom valign', () => {
    let {props} = renderComponent(FixedLayoutMain, {valign: 'middle'});
    assert.equal(props.style.verticalAlign, 'middle');
  });
});
