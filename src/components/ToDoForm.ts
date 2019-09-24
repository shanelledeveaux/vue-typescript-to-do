import { Component, Vue, Prop } from 'vue-property-decorator';
import WithRender from './to-do-form.html';

@WithRender
@Component
export default class ToDoForm extends Vue {

    @Prop({ type: String, default: 'Add Task'}) public readonly buttonText!: string;

    public task: string = '';
    public priority: number = 2;

    public emitTask(): void {
        this.$emit('added', this.task, this.priority);
        this.task = '';
        this.priority = 2;
      }
}
