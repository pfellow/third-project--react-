import * as Popover from "@radix-ui/react-popover";
import styles from "./PopoverDemo.module.css";

const PopoverDemo = () => (
  <Popover.Root>
    <div className={styles.main}>
      <Popover.Trigger className={styles.PopoverTrigger}>
        Show info
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className={styles.PopoverContent}>
          Some content
          <Popover.Arrow className={styles.PopoverArrow} />
        </Popover.Content>
      </Popover.Portal>
    </div>
  </Popover.Root>
);

export default PopoverDemo;
