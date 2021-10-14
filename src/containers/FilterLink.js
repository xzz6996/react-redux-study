/**
 * FilterLink 得到当前过滤器并渲染 Link。
    filter: string 就是当前过滤的状态
 */
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../models/todolist/actions'
import Link from './../components/Link'

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.visibilityFilter === ownProps.filter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default FilterLink