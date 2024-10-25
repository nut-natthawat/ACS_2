import random
def priority_scheduling(processes):
    n = len(processes)
    processes.sort(key=lambda x: (x['arrival_time'], x['priority']))  # เรียงตาม arrival time และ priority
    waiting_time = [0] * n
    turnaround_time = [0] * n
    gantt_chart = []
    completed_time = 0  # เวลาที่สิ้นสุดการทำงานของ process ก่อนหน้า

    for i in range(n):
        process = processes[i]
        if completed_time < process['arrival_time']:
            gantt_chart.append("Idle")
            completed_time = process['arrival_time']
        
        waiting_time[i] = max(0, completed_time - process['arrival_time'])
        turnaround_time[i] = waiting_time[i] + process['burst_time']
        completed_time += process['burst_time']
        gantt_chart.append(f"P{process['id']}")

    # แสดงข้อมูลของแต่ละ process
    print(f"{'Process':<10}{'Arrival Time':<15}{'Burst Time':<15}{'Priority':<10}{'Waiting Time':<15}{'Turnaround Time':<15}")
    for i, process in enumerate(processes):
        print(f"P{process['id']:<10}{process['arrival_time']:<15}{process['burst_time']:<15}{process['priority']:<10}{waiting_time[i]:<15}{turnaround_time[i]:<15}")

    avg_waiting_time = sum(waiting_time) / n
    avg_turnaround_time = sum(turnaround_time) / n
    print(f"\nAverage Waiting Time: {avg_waiting_time}")
    print(f"Average Turnaround Time: {avg_turnaround_time}")

    # แสดงผล Gantt Chart
    print("\nGantt Chart:")
    print(" | ".join(gantt_chart))


def get_user_input():
    num_processes = int(input("Enter the number of processes: "))
    processes = []

    for i in range(num_processes):
        arrival_time = int(input(f"Enter Arrival Time for Process {i+1}: "))
        burst_time = int(input(f"Enter Burst Time for Process {i+1}: "))
        priority = int(input(f"Enter Priority for Process {i+1} (lower number = higher priority): "))
        processes.append({'id': i + 1, 'arrival_time': arrival_time, 'burst_time': burst_time, 'priority': priority})

    return processes


def generate_random_processes(num_processes, max_arrival_time, max_burst_time, max_priority):
    return [
        {'id': i + 1, 'arrival_time': random.randint(0, max_arrival_time), 'burst_time': random.randint(1, max_burst_time), 'priority': random.randint(0, max_priority)}
        for i in range(num_processes)
    ]


def main():
    choice = input("Choose input method (1: Manual Input, 2: Random Generation): ")

    if choice == "1":
        processes = get_user_input()
    elif choice == "2":
        num_processes = int(input("Enter the number of processes: "))
        max_arrival_time = int(input("Enter max arrival time: "))
        max_burst_time = int(input("Enter max burst time: "))
        max_priority = int(input("Enter max priority (lower number = higher priority): "))
        processes = generate_random_processes(num_processes, max_arrival_time, max_burst_time, max_priority)
    else:
        print("Invalid choice, please enter 1 or 2.")
        return

    priority_scheduling(processes)


# เรียกใช้งานโปรแกรม
main()
