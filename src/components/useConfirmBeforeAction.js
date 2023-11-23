import ModalDialog from './../components/ModalDialog.vue'
import { createConfirmDialog } from 'vuejs-confirm-dialog'

const useConfirmBeforeAction = (action, props) => {
    const { reveal, onConfirm } = createConfirmDialog(ModalDialog, props)

    onConfirm(action)

    reveal()
}

export default useConfirmBeforeAction