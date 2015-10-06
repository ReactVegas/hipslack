import {assert} from 'chai';
import {renderComponent} from 'support/rendering';
import GridLayoutCell from 'components/layouts/GridLayoutCell';

describe('GridLayoutCell', () => {

  it('renders default', () => {
    let {props} = renderComponent(GridLayoutCell, {}, 'foo');
    assert.deepEqual(props, {
      children: ['foo'],
      className: '',
      style: {
        display: 'table-cell',
        verticalAlign: 'top',
        width: `${(1 / 12)}%`
      }
    });
  });

  it('renders custom className', () => {
    let {props} = renderComponent(GridLayoutCell, {className: 'Test'});
    assert.equal(props.className, 'Test');
  });

  it('renders custom size', () => {
    let {props} = renderComponent(GridLayoutCell, {size: 3});
    assert.equal(props.style.width, `${(3 / 12)}%`);
  });

  it('renders custom valign', () => {
    let {props} = renderComponent(GridLayoutCell, {valign: 'bottom'});
    assert.equal(props.style.verticalAlign, 'bottom');
  });
});
