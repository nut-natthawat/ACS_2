#include <stdio.h>
#include <unistd.h>
#include <sys/types.h>

int main(){
    int num_childen = 4;
    pid_t pids[num_childen];

    for(int i=0;i < num_childen;i++){
        pids[i] = fork();
        if(pids[i] < 0){
            perror("fork");
            return 1;
        }
        if(pids[i] == 0){
            printf("Child process with pid %d\n",getpid());
            return 0;
        }
    }
    for(int i=0;i<num_childen;i++){
        wait(NULL);
    }
    printf("number of child process created : %d\n",num_childen);
    return 0;
}
